import React, { useEffect, useState } from 'react';
import background from '../Assets/bg1.png';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import Footer from '../Components/Footer';
import { v4 } from "uuid";


const Checkout = () => {

    const {id:idParams} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [side, setSide] = useState(false);
    const [harga, setHarga] = useState();
    const uniqueID = v4();
    let id = uniqueID.slice(0, 8);
    let [data, setData] = useState({
        nama: '',
        telepon: '',
        alamat: '',
        buah: idParams === '1' ? 'Anggur Red Globe' : idParams === '2' ? 'Anggur Hijau' : 'Anggur Hitam',
        qty: '',
        hargaTotal: harga || 0,
        id_pembelian: id
    })
    
    // console.log(data);

    useEffect(()=>{
        if (data.buah === '1' && data.qty === '0.25') {
        setHarga(16000)
        } else if (data.buah === '1' && data.qty === '0.50'){
        setHarga(26000)
        } else if (data.buah === '2' && data.qty === '0.25'){
        setHarga(19000)
        } else if (data.buah === '2' && data.qty === '0.50'){
        setHarga(39000)
        } else if (data.buah === '3' && data.qty === '0.25'){
        setHarga(14000)
        } else if (data.buah === '3' && data.qty === '0.50'){
        setHarga(23000)
        } else if (data.buah === '1'){
        setHarga(39000 * data.qty)
        } else if (data.buah === '2'){
        setHarga(77000 * data.qty)
        } else {
        setHarga(40000 * data.qty)
        }
    }, [data.qty, data.buah])

    const handleChange = (e) => {
        setData({
        ...data,
        [e.target.name]: e.target.value
        })
    };

    const handleSide = () => {
        try {
        if (side === true) {
            setSide(false);
        }else{
            setSide(true);
        }
        } catch (error) {
        
        }
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        try {
            Swal.fire({
                title: "Yakin dengan pesanan anda?",
                text: "Pastikan data yang anda masukan sudah benar!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#FD4C00",
                cancelButtonColor: "#FD4C00",
                confirmButtonText: "Yes"
            }).then(async(result) => {
                if (result.isConfirmed) {
                    setIsLoading(true);
                    console.log('post success');
                    console.log(harga);
                    await axios.post(`${process.env.REACT_APP_API}checkout`, data)
                    // await axios.put(`${process.env.REACT_APP_API}checkout`, { harga, id })
                    // console.log('put success');
                    setIsLoading(false)
                    navigate('/')
                    Swal.fire({
                        title: "Sukses!",
                        text: "Pesanan anda akan segera kami proses, tim kami akan menghubungi anda segera.",
                        icon: "success"
                });
                }
            });
        } catch (error) {
            setIsLoading(true);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
            setIsLoading(false);
        }
    }

    const testPut = async(e) => {
        e.preventDefault();
        try {
            console.log(harga);
            await axios.put(`${process.env.REACT_APP_API}checkout`, { harga, id })
            console.log('put berhasil');
        } catch (error) {
            console.log(error, 'put failed');
        }
    }

  return (
    <div className='h-full grid lg:h-screen xl:h-full bg-fixed' style={{ backgroundImage: `url(${background})` }}>
        <Navbar open={handleSide} close={handleSide} menu={side} />
        <div className="wrapper w-11/12 mx-auto grid text-white my-10 xl:my-5">
            <p className='text-xl lg:text-3xl xl:text-2xl font-semibold'>Silahkan isi form di bawah untuk melakukan pemesanan.</p>
            <div className="wrapperForm w-full lg:w-9/12 xl:w-1/2 mx-auto mt-5 lg:mt-20 xl:mt-10 border rounded-lg p-3 space-y-5 lg:space-y-8 xl:space-y-2">
                <div className="grid">
                    <p className='mb-1 text-start'>Nama</p>
                    <input type="text" name='nama' onChange={handleChange} value={data.nama} className='px-2 outline-none text-black py-1 rounded border' />
                </div>
                <div className="grid">
                    <p className='mb-1 text-start'>Telepon</p>
                    <input type="text" name='telepon' value={data.telepon} onChange={handleChange} className='px-2 outline-none text-black py-1 rounded border' />
                </div>
                <div className="grid">
                    <p className='mb-1 text-start'>Alamat</p>
                    <input type="text" name='alamat' onChange={handleChange} value={data.alamat} className='px-2 outline-none text-black py-1 rounded border' />
                </div>
                <div className="grid">
                    <p className='mb-1 text-start'>Buah</p>
                    <div className='px-2 py-1 rounded border bg-white'>
                        <p className='text-start text-black font-semibold'>{data.buah}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="grid xl:w-1/4">
                        <p className='mb-1 text-start'>Jumlah</p>
                        <div className="flex">
                            <select type="text" name='qty' onChange={handleChange} value={data.qty} className='px-2 py-1 rounded border w-full text-black outline-none font-semibold'>
                                <option value="0.25">¼</option>
                                <option value="0.50">½</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <p className='mb-1 ml-2 text-lg font-semibold'>Kg</p>
                        </div>
                    </div>
                    <div className="grid xl:mx-auto w-3/4 ml-10">
                        <p className='mb-1 text-start'>Harga</p>
                        <div className='px-2 py-1 rounded border bg-white'>
                            <p className='text-start text-black font-semibold'>Rp. { harga }</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleCheckout} className='text-black bg-white rounded-full py-2 lg:h-max w-3/4 xl:w-1/4 mx-auto font-bold mt-8 lg:mt-16 xl:mt-10 xl:mb-5 transition-all duration-700 hover:scale-110'>Pesan Sekarang</button>
            <button className='my-20 bg-white text-black w-max' onClick={testPut}>Test</button>
        </div>
        <Footer />
        {
        isLoading === true ?
            <Loading />
        :
        null 
        }
    </div>
  )
}

export default Checkout