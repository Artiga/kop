import { map } from '../lib/parallel';

interface Product {
    code: string;
    price: number;
}

const fetchProduct = async (code: string): Promise<Product> => new Promise(
    (resolve: Function): void => {
        const price: number = parseInt(code, 10);

        setTimeout((): void => {
            const product: Product = {
                code,
                price,
            };

            resolve(product);
        }, price);
    },
);

describe('map', (): void => {
    it('should apply each argument to the async function ', async (): Promise<any> => {
        const codes: string[] = ['123', '456', '789'];
        const expected = codes.map((code): Product => ({
            code,
            price: parseInt(code, 10),
        }));

        const results: Product[] = await map(codes, fetchProduct);

        expect(results).toEqual(expected);
    });
});
