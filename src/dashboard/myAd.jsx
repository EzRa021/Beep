

// AdList.jsx
import React, { useContext, useCallback } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip } from '@nextui-org/react';
import { EditIcon } from '../components/icon';
import { DeleteIcon } from '../components/icon';
import { EyeIcon } from '../components/icon';
import { AdContext } from '../context/AdContext';
import { Link } from 'react-router-dom';
import DashNav from '../components/dashNav';
import BreedCrumb from '../components/breedCrumb';

const MyAd = () => {
    const { ads, deleteAd, setEditAd } = useContext(AdContext);
    console.log(ads)
    const statusColorMap = {
        active: 'success',
        paused: 'danger',
        expired: 'warning',
    };

    const columns = [
        { uid: 'name', name: 'NAME' },
        { uid: 'date', name: 'DATE' },
        { uid: 'price', name: 'PRICE' },
        { uid: 'status', name: 'STATUS' },
        { uid: 'actions', name: 'ACTIONS' },
    ];

    const renderCell = useCallback((ad, columnKey) => {
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
            case 'status':
                return (
                    <Chip className="capitalize" color={statusColorMap[ad.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case 'actions':
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <Link to={`/ad-details/${ad._id}`}>  <EyeIcon />
                                </Link>

                            </span>
                        </Tooltip>
                        <Tooltip content="Edit ad">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => setEditAd(ad)}>
                                <EditIcon />
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
    }, [deleteAd, setEditAd]);
    return (
        <div>
 
            {/* // <!-- dashboard section start  --> */}
            <section>
                <BreedCrumb pageTitle="My Ads" currentPage="my-ad"/>
                <div className=" flex lg:gap-10 gap-2  container mx-auto py-8">
                    <DashNav/>
                    <div className=' w-full'>
                        <div >
                            <Table aria-label="Ad List with Custom Cells">
                                <TableHeader columns={columns}>
                                    {(column) => (
                                        <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                                            {column.name}
                                        </TableColumn>
                                    )}
                                </TableHeader>
                                <TableBody items={ads}>
                                    {(item) => (
                                        <TableRow key={item._id}>
                                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>

                    </div>
                </div>
            </section>
            {/* // <!-- dashboard section end  --> */}

            {/* // <!-- Back To Top Btn --> */}
            <button className="scrollTop" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.25V3.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.25 10.5L12 3.75L18.75 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>


        </div>

    )
}

export default MyAd


