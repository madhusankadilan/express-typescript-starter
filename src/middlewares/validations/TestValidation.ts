export class TestValidation {
    static validateTest(req: any, res: any, next: any) {
        // Validation logic goes here
        return next();
    }
}