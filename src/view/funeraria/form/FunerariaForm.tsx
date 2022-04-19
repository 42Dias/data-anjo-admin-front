import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import CerimoniaAutocompleteFormItem from 'src/view/cerimonia/autocomplete/CerimoniaAutocompleteFormItem';

const schema = yup.object().shape({
  nomeFuneraria: yupFormSchemas.string(
    i18n('entities.funeraria.fields.nomeFuneraria'),
    {},
  ),
  idCerimonia: yupFormSchemas.relationToMany(
    i18n('entities.funeraria.fields.idCerimonia'),
    {},
  ),
});

function FunerariaForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nomeFuneraria: record.nomeFuneraria,
      idCerimonia: record.idCerimonia || [],
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
                name="nomeFuneraria"
                label={i18n('entities.funeraria.fields.nomeFuneraria')}
              hint={i18n('entities.funeraria.hints.nomeFuneraria')}
                required={false}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <CerimoniaAutocompleteFormItem  
                name="idCerimonia"
                label={i18n('entities.funeraria.fields.idCerimonia')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default FunerariaForm;
