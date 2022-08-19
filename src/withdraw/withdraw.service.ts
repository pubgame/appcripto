import { Injectable } from '@nestjs/common';
import { CreateWithdrawDto } from './dto/create-withdraw.dto';
const axios = require('axios').default;

@Injectable()
export class WithdrawService {

    async create(data: CreateWithdrawDto) {
        
        const API_TOKEN: string = "E5WAGWW2ZDA5KQ6Q2VV4AEKIASUM2J59PY";
        const busdDepositAmount: number = data.busdDepositAmount;
        const hashTransaction: string = data.hashTransaction;

        const URI: string = `https://api.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=${hashTransaction}&apikey=${API_TOKEN}`;

        axios
            .get(URI)
            .then((res: any) => {
                return axios.get(
                URI
                );
            })
            .then((res: any) => {

                /*

                    { status: '1', message: 'OK', result: { status: '1' } }
            
                    => Verificar se o primeiro status é um. Se sim, a api funcionou.
                    => Verificar se o result.status é igual a 1. Se sim, houve sucesso.
        
                */

                const response = res.data;

                if (response.status && response.status == "1" && response.result.status && response.result.status == "1") {
                    
                    const BUSD_URI = `http://137.184.86.187/api/game/players/finances/deposit/BUSD?busdDepositAmount=${busdDepositAmount}&${hashTransaction}`;
                    
                    axios.post('/user', {
                        firstName: 'Fred',
                        lastName: 'Flintstone'
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                    });

                    // axios
                    //     .post(BUSD_URI)
                    //     .then((res: any) => {
                    //         return axios.post(BUSD_URI);
                    //     })
                    //     .then((res: any) => {
                    //         console.log(res.data);
                    //     })
                    //     .catch((err: any) => {
                    //         throw err;
                    //     })

                } else {
                    console.log('Erro');
                    console.log(response);
                }

            })
            .catch((err: any) => {
                throw err;
        });

    }

}
