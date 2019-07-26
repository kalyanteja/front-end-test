import { FormattedTime } from './date-utils';

describe('testing date utilities', () => {

    it("today's date should be displayed TODAY", () => {
        const formattedDate = FormattedTime(new Date());

        expect(formattedDate.includes("Today")).toEqual(true);
    });

    it("Other dates are formatted correctly", () => {
        const formattedDate = FormattedTime("2019-08-16T10:11:00.000Z");
        expect(formattedDate != null && formattedDate === "Aug 16th, 11:11 am").toEqual(true);
    });
})