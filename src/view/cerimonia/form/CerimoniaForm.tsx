import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import FunerariaAutocompleteFormItem from 'src/view/funeraria/autocomplete/FunerariaAutocompleteFormItem';

const schema = yup.object().shape({
  nomeHomenageado: yupFormSchemas.string(
    i18n('entities.cerimonia.fields.nomeHomenageado'),
    {
      "required": true,
      "min": 3
    },
  ),
  cpf: yupFormSchemas.string(
    i18n('entities.cerimonia.fields.cpf'),
    {
      "required": true,
      "min": 10,
      "max": 12
    },
  ),
  dataCerimonia: yupFormSchemas.date(
    i18n('entities.cerimonia.fields.dataCerimonia'),
    {
      "required": true
    },
  ),
  responsavel: yupFormSchemas.string(
    i18n('entities.cerimonia.fields.responsavel'),
    {
      "required": true,
      "min": 3
    },
  ),
  telefoneResponsavel: yupFormSchemas.string(
    i18n('entities.cerimonia.fields.telefoneResponsavel'),
    {
      "required": true
    },
  ),
  emailResponsavel: yupFormSchemas.string(
    i18n('entities.cerimonia.fields.emailResponsavel'),
    {
      "required": true
    },
  ),
  idFuneraria: yupFormSchemas.relationToOne(
    i18n('entities.cerimonia.fields.idFuneraria'),
    {},
  ),
});

function CerimoniaForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nomeHomenageado: record.nomeHomenageado,
      cpf: record.cpf,
      dataCerimonia: record.dataCerimonia ? moment(record.dataCerimonia, 'YYYY-MM-DD').toDate() : null,
      responsavel: record.responsavel,
      telefoneResponsavel: record.telefoneResponsavel,
      emailResponsavel: record.emailResponsavel,
      idFuneraria: record.idFuneraria,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="nomeHomenageado"
                label={i18n('entities.cerimonia.fields.nomeHomenageado')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="cpf"
                label={i18n('entities.cerimonia.fields.cpf')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="dataCerimonia"
                label={i18n('entities.cerimonia.fields.dataCerimonia')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="responsavel"
                label={i18n('entities.cerimonia.fields.responsavel')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="telefoneResponsavel"
                label={i18n('entities.cerimonia.fields.telefoneResponsavel')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="emailResponsavel"
                label={i18n('entities.cerimonia.fields.emailResponsavel')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FunerariaAutocompleteFormItem  
                name="idFuneraria"
                label={i18n('entities.cerimonia.fields.idFuneraria')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default CerimoniaForm;
