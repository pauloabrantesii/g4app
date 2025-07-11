import React, { useCallback, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { AppDispatch, AppState } from '../../store';
import { fetchCustomerById } from '../../store/customerSlice';
import { styles } from './styles';
import { CustomerDetailContainerProps } from './types';

const CustomerDetailContainer: React.FC<CustomerDetailContainerProps> = ({ 
  route 
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedCustomer, isLoading, error } = useSelector((state: AppState) => state.customer);
  const { customerId } = route.params;

  const loadCustomer = useCallback(async () => {
    try {
      await dispatch(fetchCustomerById(customerId)).unwrap();
    } catch (error) {
      // Erro tratado pelo Redux
    }
  }, [dispatch, customerId]);

  useEffect(() => {
    loadCustomer();
  }, [loadCustomer]);

  const renderField = (label: string, value: string) => (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.fieldValue}>{value}</Text>
    </View>
  );

  const renderErrorState = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>
        {error || 'Erro ao carregar detalhes do cliente'}
      </Text>
      <Button
        title="Tentar novamente"
        onPress={loadCustomer}
        variant="outline"
      />
    </View>
  );

  if (isLoading && !selectedCustomer) {
    return <Loading text="Carregando detalhes..." />;
  }

  if (error && !selectedCustomer) {
    return renderErrorState();
  }

  if (!selectedCustomer) {
    return renderErrorState();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detalhes do Cliente</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          {renderField('Nome', selectedCustomer.name)}
          {renderField('Email', selectedCustomer.email)}
          {renderField('Telefone', selectedCustomer.phone)}
          {renderField('Empresa', selectedCustomer.company)}
        </View>
        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Endereço</Text>
          {renderField('Rua', selectedCustomer.address.street)}
          {renderField('Cidade', selectedCustomer.address.city)}
          {renderField('Estado', selectedCustomer.address.state)}
          {renderField('CEP', selectedCustomer.address.zipCode)}
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomerDetailContainer; 