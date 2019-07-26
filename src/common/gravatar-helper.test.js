import { ImageHashByEmail } from './gravatar-helper';
import md5 from 'md5';

describe('testing image hashing', () => {

    it("if email doesn't exist return default hash", () => {
        const imgHash = ImageHashByEmail(undefined);
        expect(imgHash).toEqual("00000000000000000000000000000000");
    });

    it("for a random non-existant email, hash should be valid", () => {
        //random email
        const randomEmail = 'ranks.tsds@gymp.com'
        const imgHash = ImageHashByEmail(randomEmail);
        expect(imgHash).toEqual(md5(randomEmail)); 
    });
})