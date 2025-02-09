"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { useRouter } from "next/navigation";


interface productType{
        id: string,
        description: string,
        name: string,
        price: string,
        stock: string,
        priceId: string
      }

 const Products = () =>{

                const [data, setData] = useState<productType[]>([]);
                const [loading, setLoading] = useState(true);
                const [error, setError] = useState(null);

                const router = useRouter();
                const {token} = useAuth();


                useEffect(()=>{
                    if(!token){
                        router.push("/login");
                    }
                });

                    useEffect(() => {
                        axios.get("http://localhost:3001/api/product/get")
                        .then((response) => {
                            setData(response.data);
                        })
                        .catch((error) => {
                            setError(error);
                        })
                        .finally(() => {
                            setLoading(false);
                        });
                    }, []);

                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error loading data</p>;

                           

                            return (
                                <ul>
                                {data.map((item: productType) => (
                                    <li key={item.id}>{item.description}</li>
                                ))}
                                </ul>
                            );

}

export default Products;