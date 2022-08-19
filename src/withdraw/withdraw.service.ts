import { Injectable } from '@nestjs/common';
import { CreateWithdrawDto } from './dto/create-withdraw.dto';
const axios = require('axios').default;

@Injectable()
export class WithdrawService {

    async create(data: CreateWithdrawDto) {
        
        const API_TOKEN: string = "E5WAGWW2ZDA5KQ6Q2VV4AEKIASUM2J59PY";
        const busdDepositAmount: number = data.busdDepositAmount;
        const hashTransaction: string = data.hashTransaction;
        const authorization: string = data.authorization;
        const URI: string = `https://api.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=${hashTransaction}&apikey=${API_TOKEN}`;

        axios
            .get(URI)
            .then((res: any) => {
                return axios.get(
                URI
                );
            })
            .then((res: any) => {

                async function createWithdrawDto() {
                    const response = res.data;

                    if (response.status && response.status == "1" && response.result.status && response.result.status == "1") {
                        
                        const BUSD_URI = `https://backend.pubgame.io/api/game/players/finances/deposit/BUSD`;

                        const dataWithdraw = {
                            busdDepositAmount: busdDepositAmount,
                            hashTransaction: hashTransaction,
                            authorization: authorization
                        }


                        // const res = await axios.post(BUSD_URI, dataWithdraw, {
                        //     headers: {
                        //         'content-type': 'text/json',
                        //         'Authorization': authorization
                        //     }
                        // });

                        // res.data.headers['Content-Type'];

                        axios.post(BUSD_URI, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': authorization
                            },
                            dataWithdraw
                        })      
                        .then((response: any) => {
                            console.log(response.data);
                        })
                        .catch((error: any) => {
                            throw error;
                        })

                    } else {
                        console.log('Erro');
                        console.log(response);
                    }
                }

                // const withdraw = createWithdraw();

            })
            .catch((err: any) => {
                throw err;
        });

    }

}
