import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'

import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Breadcrumb from '../../Components/Layout/Breadcrumb'


const EditMentee = () => {
    const location = useLocation();
    const id = location?.state?.id;
    const navigate = useNavigate()
    const token = Cookies.get("token");

    const [editData, setEditData] = useState<any[]>([])

    const [full_name, setFull_name] = useState('')
    const [current_address, setCurrent_address] = useState('')
    const [home_address, setHome_address] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const [telegram, setTelegram] = useState()
    const [phone, setPhone] = useState()
    const [emergency_name, setEmergency_name] = useState()
    const [emergency_phone, setEmergency_phone] = useState()
    const [emergency_status, setEmergency_status] = useState()
    const [education_type, setEducation_type] = useState()
    const [major, setMajor] = useState()
    const [graduate, setGraduate] = useState()

    const handlefull_name = (e: any) => {
        setFull_name(e?.target?.value);
    }
    const handlecurrent_address = (e: any) => {
        setCurrent_address(e?.target?.value);
    }
    const handlehome_address = (e: any) => {
        setHome_address(e?.target?.value);
    }
    const handleEmail = (e: any) => {
        setEmail(e?.target?.value);
    }
    const handleGender = (e: any) => {
        setGender(e?.target?.value);
    }
    const handleTelegram = (e: any) => {
        setTelegram(e?.target?.value);
    }
    const handlePhone = (e: any) => {
        setPhone(e?.target?.value);
    }
    const handleEmergency_name = (e: any) => {
        setEmergency_name(e?.target?.value);
    }
    const handleEmergency_phone = (e: any) => {
        setEmergency_phone(e?.target?.value);
    }
    const handleEmergency_status = (e: any) => {
        setEmergency_status(e?.target?.value);
    }
    const handleType = (e: any) => {
        setEducation_type(e?.target?.value);
    }
    const handleMajor = (e: any) => {
        setMajor(e?.target?.value);
    }
    const handleGraduate = (e: any) => {
        setGraduate(e?.target?.value);
    }
    const getEditData = (id: any) => {
        axios
            .get(`mentees/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((response) => {
                console.log('response : ', response);
                setEditData(response?.data?.data);
            })
            .catch((error) => {
                console.log('Error From get Edit data : ', error);
            })
    }

    useEffect(() => {
        getEditData(id);
    }, [])

    const handleSubmitEdit = () => {
        axios
            .put(`https://virtserver.swaggerhub.com/BE-18/ALTA_Project/1.0.0/mentees/${location?.state?.id}`, {
                "full_name": full_name,
                "current_address": current_address,
                "home_address": home_address,
                "email": email,
                "gender": gender,
                "telegram": telegram,
                "phone": phone,
                "emergency_name": emergency_name,
                "emergency_phone": emergency_phone,
                "emergency_status": emergency_status,
                "education_type": education_type,
                "major": major,
                "graduate": graduate
            }
                // ,{
                //   headers: {
                //     Authorization: `Bearer ${token}`
                //   }
                // }
            )
            .then(response => {
                console.log(response);

                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.data.message,
                    confirmButtonText: "OK",
                }).then(() => {
                    navigate("/ListMentee")
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: `Something went wrong : ${error}`,
                    confirmButtonText: "OK",
                });
            })
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-grow">
                    <Navbar />
                    {/* Konten Utama Dashboard */}
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>Edit Mentee</h1>
                        <Breadcrumb />
                    </div>

                    {/* Start Card Main */}
                    <div className="max-w-full p-4  bg-white border border-gray-400 m-4 rounded-lg shadow">
                        <form action="">
                            <div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="FullName" className='md:w-2/12 font-medium text-blue-500'>Full Name</label>
                                    <input
                                        type="text"
                                        id='full_name'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.full_name}
                                        onChange={handlefull_name}
                                    />
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="Address" className='md:w-2/12 font-medium text-blue-500'>Address</label>
                                    <input
                                        type="text"
                                        id='current_address'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.current_address}
                                        onChange={handlecurrent_address}
                                    />
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="HomeAddress" className='md:w-2/12 font-medium text-blue-500'>Home Address</label>
                                    <input
                                        type="text"
                                        id='home_address'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.home_address}
                                        onChange={handlehome_address} />
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="email" className='md:w-2/12 font-medium text-blue-500'>Email</label>
                                    <input
                                        type="email"
                                        id='email'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.email}
                                        onChange={handleEmail} />
                                </div>
                                <div className='mb-3 flex'>
                                    <label htmlFor="Gender" className='md:w-2/12 font-medium text-blue-500'>Gender</label>
                                    <div className="flex md:w-10/12">
                                        <div className="flex items-center mr-4">
                                            <input
                                                type="radio"
                                                id="gender"
                                                name="gender"
                                                value="male"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                onChange={handleGender}
                                            checked={editData.gender === 'Male'}
                                            />
                                            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input
                                                type="radio"
                                                id="gender"
                                                name="gender"
                                                value="male"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                onChange={handleGender}
                                            checked={editData.gender === 'Female'}
                                            />
                                            <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="telegram" className='md:w-2/12 font-medium text-blue-500'>Telegram</label>
                                    <input
                                        type="text"
                                        id='telegram'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.telegram}
                                        onChange={handleTelegram} />
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="phone" className='md:w-2/12 font-medium text-blue-500'>Phone</label>
                                    <input
                                        type="text"
                                        id='phone'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.phone}
                                        onChange={handlePhone} />
                                </div>
                            </div>

                            <div>
                                <div className='mb-3 mt-6'>
                                    <h1 className='underline underline-offset-4 text-2xl font-semibold'>Emergency Data</h1>
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="emergency_name" className='md:w-2/12 font-medium text-blue-500'>Name</label>
                                    <input
                                        type="text"
                                        id='emergency_name'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.emergency_name}
                                        onChange={handleEmergency_name} />
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="emergency_phone" className='md:w-2/12 font-medium text-blue-500'>Phone</label>
                                    <input
                                        type="text"
                                        id='emergency_phone'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.emergency_phone}
                                        onChange={handleEmergency_phone} />
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="emergency_status" className='md:w-2/12 font-medium text-blue-500'>Status</label>
                                    <select
                                        id='emergency_status'
                                        onChange={handleEmergency_status}
                                        className='md:w-10/12 rounded-lg'>
                                        <option value={editData.emergency_status}>{editData.emergency_status}</option>
                                        <option value="orang_tua">Orang Tua</option>
                                        <option value="kakek_nenek">Kakek Nenek</option>
                                        <option value="saudara_ortu">Saudara dari Orang Tua Kandung</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='mb-3 mt-6'>
                                    <h3 className='underline underline-offset-4 text-2xl font-semibold'>Education Data</h3>
                                </div>
                                <div className='mb-3 flex'>
                                    <label htmlFor="type" className='md:w-2/12 font-medium text-blue-500'>Type</label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4">
                                            <input
                                                type="radio"
                                                id="type"
                                                name="type"
                                                value="informatics"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                onChange={handleType}
                                            checked={editData.education_type === 'informatics'}
                                            />
                                            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Informatics</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input
                                                type="radio"
                                                id="type"
                                                name="type"
                                                value="non-informatics"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                onChange={handleType}
                                            checked={editData.education_type === 'non-informatics'}
                                            />
                                            <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">non-informatics</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="major" className='md:w-2/12 font-medium text-blue-500'>Major</label>
                                    <input
                                        type="text"
                                        id='major'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.major}
                                        onChange={handleMajor} />
                                </div>
                                <div className='flex justify-between mb-3 items-center'>
                                    <label htmlFor="graduate" className='md:w-2/12 font-medium text-blue-500'>Graduate</label>
                                    <input
                                        type="text"
                                        id='graduate'
                                        className='md:w-10/12 p-2 border rounded-md shadow-lg'
                                        value={editData.graduate}
                                        onChange={handleGraduate} />
                                </div>

                            </div>
                            <div className='flex justify-end my-5'>
                                <button
                                    onClick={handleSubmitEdit}
                                    className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-3'>Submit</button>
                            </div>


                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}

export default EditMentee