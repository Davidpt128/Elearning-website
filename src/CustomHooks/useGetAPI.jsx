import {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function useGetAPI(urlAPI,reducer,typeDispatch) {
    const {data} = useSelector((rootReducer) => rootReducer[reducer]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                //call API
                const result = await axios({
                    url: urlAPI,
                    method: 'GET',
                });
                //dispatch action
                dispatch ({
                    type: typeDispatch,
                    data: result.data,
                }); 
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    },[])

  return {data}
}


// const {data} = useGetData('http://svcy.....')
// or
// const {data: tasks} = useGetData('http://svcy.....')
