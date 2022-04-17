import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    ButtonGroup,
    Stack
} from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { deleteCategory } from '../../actions/category';



const CategoriesTable = () => {
    const dispatch = useDispatch()

    const handleDelete = (categoryId) => {
        dispatch(deleteCategory(categoryId))
    }
    const [categoriess, setCategories] = useState([])

    const getCategories = async () => {
        const res = await axios.get('https://hemanth-e-commerce-backend-api.herokuapp.com/api/v1/category/all')
        // console.log(res.data)
        const { categories } = res.data
        // // console.log(products)
        setCategories(categories)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <Table variant='simple'>
            <TableCaption>All Categories</TableCaption>
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Category Name</Th>
                </Tr>
            </Thead>
            <Tbody>
                {categoriess.map(category => <>
                    <Tr>
                        <Td>{category && category._id}</Td>
                        <Td>{category && category.name}</Td>
                        <Td>
                            <Stack direction='row' spacing={4} align='center'>
                                <Button onClick={() => { handleDelete(category._id) }} colorScheme='red' variant='solid'>
                                    Delete
                                </Button>
                                <Button colorScheme='purple' variant='solid'>
                                    Edit
                                </Button>
                            </Stack>
                        </Td>
                    </Tr>
                </>)}
            </Tbody>
        </Table>
    );
}

export default CategoriesTable;
