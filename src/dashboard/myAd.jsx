// src/components/AdList.jsx
import React, { useContext } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from '@nextui-org/react';
import { DeleteIcon } from '../components/icon';
import { EyeIcon } from '../components/icon';
import { AdContext } from '../context/AdContext';
import { Link } from 'react-router-dom';
import DashNav from '../components/dashNav';
import BreedCrumb from '../components/breedCrumb';

const MyAd = () => {
    const { ads, deleteAd, loading } = useContext(AdContext);

    const statusColorMap = {
        active: 'success',
        paused: 'danger',
        expired: 'warning',
    };

    const columns = [
        { uid: 'name', name: 'NAME' },
        { uid: 'date', name: 'DATE' },
        { uid: 'price', name: 'PRICE' },
        { uid: 'actions', name: 'ACTIONS' },
    ];

    const renderCell = (ad, columnKey) => {
        const cellValue = ad[columnKey];

        switch (columnKey) {
            case 'name':
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{ad.adName}</p>
                    </div>
                );
            case 'date':
                return <p className="text-bold text-sm">{new Date(ad.createdAt).toLocaleDateString()}</p>;
            case 'price':
                return <p className="text-bold text-sm">${cellValue}</p>;
            case 'actions':
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <Link to={`/ad-details/${ad._id}`}>  <EyeIcon />
                                </Link>
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete ad">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => deleteAd(ad._id)}>
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    };

    return (
        <div>
            <section>
                <BreedCrumb pageTitle="My Ads" currentPage="my-ad" />
                <div className="flex lg:gap-10 gap-2 container mx-auto py-8">
                    <DashNav />
                    <div className='w-full'>
                        <div >
                            <Table aria-label="Ad List with Custom Cells">
                                <TableHeader columns={columns}>
                                    {(column) => (
                                        <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                                            {column.name}
                                        </TableColumn>
                                    )}
                                </TableHeader>
                                <TableBody>
                                    {loading ? (
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell key={column.uid} colSpan={columns.length} className="text-center">
                                                    <div className='w-full h-64 flex justify-center items-center'>
                                                        <div role="status">
                                                            <svg aria-hidden="true" className="inline w-9 h-9 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ) : (
                                        ads.map((item) => (
                                            <TableRow key={item._id}>
                                                {columns.map((column) => (
                                                    <TableCell key={column.uid}>{renderCell(item, column.uid)}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>
            <button className="scrollTop">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.25V3.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.25 10.5L12 3.75L18.75 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    );
}

export default MyAd;
