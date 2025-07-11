import React, { useCallback, useEffect } from 'react';
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { AppDispatch, AppState } from '../../store';
import { fetchCustomers } from '../../store/customerSlice';
import { colors } from '../../utils/colors';
import { styles } from './styles';
import { CustomerListContainerProps } from './types';

const CustomerListContainer: React.FC<CustomerListContainerProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { customers, isLoading, error } = useSelector((state: AppState) => state.customer);

  const loadCustomers = useCallback(async () => {
    try {
      await dispatch(fetchCustomers()).unwrap();
    } catch (error) {
      // Erro tratado pelo Redux
    }
  }, [dispatch]);

  useEffect(() => {
    loadCustomers();
  }, [loadCustomers]);

  const handleCustomerPress = (customerId: string) => {
    navigation.navigate('CustomerDetail', { customerId });
  };

  const renderCustomerItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.customerItem}
      onPress={() => handleCustomerPress(item.id)}
      activeOpacity={0.7}
    >
      <Text style={styles.customerName}>{item.name}</Text>
      <Text style={styles.customerEmail}>{item.email}</Text>
      <Text style={styles.customerPhone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {error ? 'Erro ao carregar clientes' : 'Nenhum cliente encontrado'}
      </Text>
      {error && (
        <Button
          title="Tentar novamente"
          onPress={loadCustomers}
          variant="outline"
          style={styles.retryButton}
        />
      )}
    </View>
  );

  if (isLoading && customers.length === 0) {
    return <Loading text="Carregando clientes..." />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Clientes</Text>
      </View>
      
      <FlatList
        data={customers}
        renderItem={renderCustomerItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={customers.length === 0 ? { flex: 1 } : undefined}
        ListEmptyComponent={renderEmptyState}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={loadCustomers}
            colors={[colors.primary]}
          />
        }
      />
    </View>
  );
};

export default CustomerListContainer; 