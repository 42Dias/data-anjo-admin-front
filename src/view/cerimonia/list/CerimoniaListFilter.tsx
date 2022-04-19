import { i18n } from 'src/i18n';
import actions from 'src/modules/cerimonia/list/cerimoniaListActions';
import selectors from 'src/modules/cerimonia/list/cerimoniaListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import FunerariaAutocompleteFormItem from 'src/view/funeraria/autocomplete/FunerariaAutocompleteFormItem';

const schema = yup.object().shape({
  nomeHomenageado: yupFilterSchemas.string(
    i18n('entities.cerimonia.fields.nomeHomenageado'),
  ),
  cpf: yupFilterSchemas.string(
    i18n('entities.cerimonia.fields.cpf'),
  ),
  dataCerimoniaRange: yupFilterSchemas.dateRange(
    i18n('entities.cerimonia.fields.dataCerimoniaRange'),
  ),
  responsavel: yupFilterSchemas.string(
    i18n('entities.cerimonia.fields.responsavel'),
  ),
  telefoneResponsavel: yupFilterSchemas.string(
    i18n('entities.cerimonia.fields.telefoneResponsavel'),
  ),
  emailResponsavel: yupFilterSchemas.string(
    i18n('entities.cerimonia.fields.emailResponsavel'),
  ),
  idFuneraria: yupFilterSchemas.relationToOne(
    i18n('entities.cerimonia.fields.idFuneraria'),
  ),
});

const emptyValues = {
  nomeHomenageado: null,
  cpf: null,
  dataCerimoniaRange: [],
  responsavel: null,
  telefoneResponsavel: null,
  emailResponsavel: null,
  idFuneraria: null,
}

const previewRenders = {
  nomeHomenageado: {
    label: i18n('entities.cerimonia.fields.nomeHomenageado'),
    render: filterRenders.generic(),
  },
  cpf: {
    label: i18n('entities.cerimonia.fields.cpf'),
    render: filterRenders.generic(),
  },
  dataCerimoniaRange: {
    label: i18n('entities.cerimonia.fields.dataCerimoniaRange'),
    render: filterRenders.dateRange(),
  },
  responsavel: {
    label: i18n('entities.cerimonia.fields.responsavel'),
    render: filterRenders.generic(),
  },
  telefoneResponsavel: {
    label: i18n('entities.cerimonia.fields.telefoneResponsavel'),
    render: filterRenders.generic(),
  },
  emailResponsavel: {
    label: i18n('entities.cerimonia.fields.emailResponsavel'),
    render: filterRenders.generic(),
  },
  idFuneraria: {
      label: i18n('entities.cerimonia.fields.idFuneraria'),
      render: filterRenders.relationToOne(),
    },
}

function CerimoniaListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="nomeHomenageado"
                        label={i18n('entities.cerimonia.fields.nomeHomenageado')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="cpf"
                        label={i18n('entities.cerimonia.fields.cpf')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dataCerimoniaRange"
                        label={i18n('entities.cerimonia.fields.dataCerimoniaRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="responsavel"
                        label={i18n('entities.cerimonia.fields.responsavel')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="telefoneResponsavel"
                        label={i18n('entities.cerimonia.fields.telefoneResponsavel')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="emailResponsavel"
                        label={i18n('entities.cerimonia.fields.emailResponsavel')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <FunerariaAutocompleteFormItem  
                        name="idFuneraria"
                        label={i18n('entities.cerimonia.fields.idFuneraria')}        
                      />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default CerimoniaListFilter;