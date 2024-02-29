import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../store/addDelSlice';
import type { RootState } from '../..//store/store';

const List: React.FC = () => {
    const data = useSelector((state: RootState) => state.addDel.data);
    const dispatch = useDispatch();
    const [txtValue, setTxtValue] = useState<string>('');

    const addList = () => {
        if (txtValue.trim() !== '') {
            dispatch(addItem(txtValue));
            setTxtValue('');
        }
    };
    return (
        <div className="flex flex-col w-[300px]">
            <h2 className="font-bold text-slate-700 text-2xl mb-5">Pre-Task </h2>
            <div className="flex">
                <input
                    type="text"
                    id="listTxt"
                    className="w-full rounded-md border-0 pl-4 py-1.5 mr-3 text-gray-900 shadow-sm outline-0 ring-1 ring-slate-200  ring-inset placeholder:text-gray-400 focus:ring-indigo-500 focus:ring-1 text-sm leading-6"
                    placeholder="Name of list"
                    value={txtValue}
                    onChange={(e) => setTxtValue(e.target.value)}
                    autoComplete="off"
                />
                <button
                    onClick={addList}
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm border border-gray-300 focus:ring-1 focus:outline-0  hover:bg-gray-50 "
                >
                    Add
                </button>
            </div>
            <ul role="list" className="divide-y divide-gray-100 border-slate-200 border rounded-md mt-2 min-h-[77px]">
                {data.map((item) => (
                    <li key={item.id} className="flex items-center justify-between gap-x-6 py-5 px-3">
                        <div className="min-w-0">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm font-semibold leading-6 text-gray-900 whitespace-nowrap overflow-hidden overflow-ellipsis">{item.txt}</p>
                            </div>
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                            <button
                                onClick={() => dispatch(deleteItem(item.id))}
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
