import {View, Text, FlatList, StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/style';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Pair of shoes',
        amount: 59.99,
        date: new Date('2024-02-12')
    },
    {
        id: 'e2',
        description: 'Pair of trousers',
        amount: 29.99,
        date: new Date('2024-03-12')
    },
    {
        id: 'e3',
        description: 'Pair of bananas',
        amount: 19.99,
        date: new Date('2024-04-12')
    },
    {
        id: 'e4',
        description: 'books',
        amount: 29.99,
        date: new Date('2023-04-12')
    },
    {
        id: 'e5',
        description: 'artwork',
        amount: 69.99,
        date: new Date('2023-12-12')
    }
]

function ExpensesOutput ({expenses, expensesPeriod}) {
    return (
    <View style={styles.container}>
       <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
       <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>

);
}

export default ExpensesOutput;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: GlobalStyles.colors.primary700
    }
})