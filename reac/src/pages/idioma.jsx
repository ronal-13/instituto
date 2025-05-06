import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Modal, Space, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  actualizarIdioma,
  crearIdioma,
  eliminarIdioma,
  obtenerIdiomas
} from '../js/peticionesAPI';
import '../pages/styles/idioma.css';

const { Title } = Typography;

const GestionIdiomas = () => {
  const [idiomas, setIdiomas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [idiomaEditando, setIdiomaEditando] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    cargarIdiomas();
  }, []);

  const cargarIdiomas = async () => {
    try {
      const response = await obtenerIdiomas();
      const idiomasAdaptados = (response.data || response).map(idioma => ({
        ...idioma,
        nombre: idioma.name
      }));
      setIdiomas(idiomasAdaptados);
    } catch (error) {
      message.error('Error al cargar los idiomas');
    }
  };

  const mostrarModal = (idioma = null) => {
    setIdiomaEditando(idioma);
    if (idioma) {
      form.setFieldsValue({
        nombre: idioma.nombre
      });
    } else {
      form.resetFields();
    }
    setModalVisible(true);
  };

  const manejarSubmit = async (values) => {
    setCargando(true);
    try {
      const payload = {
        name: values.nombre
      };
      if (idiomaEditando) {
        await actualizarIdioma(idiomaEditando.id, payload);
        message.success('Idioma actualizado exitosamente');
      } else {
        await crearIdioma(payload);
        message.success('Idioma creado exitosamente');
      }
      setModalVisible(false);
      cargarIdiomas();
    } catch (error) {
      message.error('Error al guardar el idioma');
    } finally {
      setCargando(false);
    }
  };

  const manejarEliminar = async (id) => {
    try {
      await eliminarIdioma(id);
      message.success('Idioma eliminado exitosamente');
      cargarIdiomas();
    } catch (error) {
      message.error('Error al eliminar el idioma');
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
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => mostrarModal(record)}
          >
            Editar
          </Button>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => manejarEliminar(record.id)}
          >
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="gestion-idiomas">
      <div className="gestion-idiomas-header">
        <Title level={2} className="gestion-idiomas-title">
          Gestión de Idiomas
        </Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="gestion-idiomas-button"
          onClick={() => mostrarModal()}
        >
          Agregar Idioma
        </Button>
      </div>

      <Table
        columns={columnas}
        dataSource={idiomas}
        rowKey="id"
        bordered
        className="gestion-idiomas-table"
      />

      <Modal
        title={idiomaEditando ? 'Editar Idioma' : 'Nuevo Idioma'}
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
            name="nombre"
            label="Nombre del Idioma"
            rules={[{ required: true, message: 'Por favor ingrese el nombre del idioma' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={cargando}
              block
            >
              {idiomaEditando ? 'Actualizar' : 'Crear'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default GestionIdiomas;
