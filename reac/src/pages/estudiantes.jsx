import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined
} from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  Space,
  Table,
  Typography
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
  actualizarEstudiante,
  crearEstudiante,
  eliminarEstudiante,
  obtenerEstudiantes,
  obtenerIdiomas
} from '../js/peticionesAPI';
import '../pages/styles/estudiantes.css';

const { Title } = Typography;
const { Option } = Select;

const GestionEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [idiomas, setIdiomas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [estudianteEditando, setEstudianteEditando] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const [estudiantesData, idiomasData] = await Promise.all([
        obtenerEstudiantes(),
        obtenerIdiomas()
      ]);
      const estudiantesAdaptados = (estudiantesData.data?.students || []).map(est => ({
        ...est,
        nombres: est.name,
        correo: est.email,
        celular: est.phone,
        idiomas: est.languages || [],
      }));
      setEstudiantes(estudiantesAdaptados);
      setIdiomas(idiomasData.data || idiomasData);
    } catch (error) {
      message.error('Error al cargar los datos');
    }
  };

  const mostrarModal = (estudiante = null) => {
    setEstudianteEditando(estudiante);
    if (estudiante) {
      form.setFieldsValue({
        nombres: estudiante.nombres,
        correo: estudiante.correo,
        celular: estudiante.celular,
        idiomas: estudiante.idiomas.map(id => id.name),
      });
    } else {
      form.resetFields();
    }
    setModalVisible(true);
  };

  const manejarSubmit = async (values) => {
    setCargando(true);
    try {
      const idiomasSeleccionados = idiomas
        .filter(i => values.idiomas.includes(i.name))
        .map(i => i.id);

      const payload = {
        name: values.nombres,
        email: values.correo,
        phone: values.celular,
        languages: idiomasSeleccionados
      };

      if (estudianteEditando) {
        await actualizarEstudiante(estudianteEditando.id, payload);
        message.success('Estudiante actualizado exitosamente');
      } else {
        await crearEstudiante(payload);
        message.success('Estudiante creado exitosamente');
      }
      setModalVisible(false);
      cargarDatos();
    } catch (error) {
      message.error('Error al guardar el estudiante');
    } finally {
      setCargando(false);
    }
  };

  const manejarEliminar = async (id) => {
    try {
      await eliminarEstudiante(id);
      message.success('Estudiante eliminado exitosamente');
      cargarDatos();
    } catch (error) {
      message.error('Error al eliminar el estudiante');
    }
  };

  const columnas = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 60,
      align: 'center',
      render: (text, record, index) => index + 1
    },
    {
      title: 'Nombres',
      dataIndex: 'nombres',
      key: 'nombres',
    },
    {
      title: 'Correo',
      dataIndex: 'correo',
      key: 'correo',
    },
    {
      title: 'Celular',
      dataIndex: 'celular',
      key: 'celular',
    },
    {
      title: 'Idioma',
      dataIndex: 'idiomas',
      key: 'idiomas',
      render: (idiomas) => Array.isArray(idiomas) ? idiomas.map(i => i.name).join(', ') : ''
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => mostrarModal(record)}>Editar</Button>
          <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => manejarEliminar(record.id)}>Eliminar</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="contenedor-estudiantes">
      <div className="encabezado-estudiantes">
        <Title level={2} className="titulo-estudiantes">Registro De Estudiantes</Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="boton-agregar"
          onClick={() => mostrarModal()}
        >
          Agregar Estudiante
        </Button>
      </div>

      <Table
        columns={columnas}
        dataSource={estudiantes}
        rowKey="id"
        bordered
        className="tabla-estudiantes"
      />

      <Modal
        title={estudianteEditando ? 'Editar Estudiante' : 'Nuevo Estudiante'}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={manejarSubmit}
        >
          <Form.Item
            name="nombres"
            label="Nombres"
            rules={[{ required: true, message: 'Por favor ingrese los nombres' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="correo"
            label="Correo"
            rules={[{ required: true, message: 'Por favor ingrese el correo' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            name="celular"
            label="Celular"
            rules={[{ required: true, message: 'Por favor ingrese el celular' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="idiomas"
            label="Idiomas"
            rules={[{ required: true, message: 'Por favor seleccione al menos un idioma' }]}
          >
            <Select mode="multiple" placeholder="Seleccione los idiomas">
              {idiomas.map(idioma => (
                <Option key={idioma.id} value={idioma.name}>{idioma.name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={cargando} block>
              {estudianteEditando ? 'Actualizar' : 'Crear'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default GestionEstudiantes;
