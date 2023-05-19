import { request } from '../../utils/requests.js';

export async function getGreetings() {
    it('Retrieve greeting', async function () {
        await request(this, 'GET', '/greetings', undefined, false, 
            {
                statusCode : 200,
                expectedFields: [
                    'greetings'
                ],
                expectedValues: [
                                    {path: 'greetings', value: 'Hello from Python App!'}
                                ]
            }
        )
    })
}
