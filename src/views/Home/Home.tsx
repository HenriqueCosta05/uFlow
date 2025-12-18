import {
    Cell,
    Column,
    Group,
    Row,
    Table,
    TableBody,
    TableHeader,
} from 'react-aria-components'
import homeStyles from './Home.module.css'
import { useEffect } from 'react'
import { mockAPI } from '../../services/API'
import type { Todo } from '../../@types'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { setTodos } from '../../store/slices/Todo'

export default function Home() {
    const todos = useSelector((state: RootState) => state.todo.todos)
    const ui = useSelector((state: RootState) => state.ui)

    const dispatch = useDispatch()
    const { t } = useTranslation()

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await mockAPI.get<Todo[]>('/todos.json')
            dispatch(setTodos(response.data))
        }
        fetchTodos()
    }, [])

    useEffect(() => {
        if (ui.errorMessage) {
            alert(ui.errorMessage)
        }
    }, [ui.errorMessage])

    return (
        <Group className={homeStyles.container}>
            <h1 className={homeStyles.h1}>{t('home.title')}</h1>
            <p className={homeStyles.paragraph}>{t('home.description')}</p>
            <Table className={homeStyles.table} aria-labelledby="table-label">
                <TableHeader className={homeStyles.tableHeader}>
                    <Column isRowHeader>{t('home.table.id')}</Column>
                    <Column>{t('home.table.task')}</Column>
                    <Column>{t('home.table.status')}</Column>
                </TableHeader>
                <TableBody>
                    {todos.map((todo) => (
                        <Row key={todo.id} className={homeStyles.tableRow}>
                            <Cell className={homeStyles.tableCell}>
                                {todo.id}
                            </Cell>
                            <Cell className={homeStyles.tableCell}>
                                {todo.title}
                            </Cell>
                            <Cell className={homeStyles.tableCell}>
                                {todo.completed ? 'Yes' : 'No'}
                            </Cell>
                        </Row>
                    ))}
                </TableBody>
            </Table>
        </Group>
    )
}
