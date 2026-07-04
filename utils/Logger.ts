export class Logger{
    static info(message: string){
        console.log(`[INFO] ${message}`);
    }
    static error(message: string) {
        console.error(`[ERROR] ${message}`);
    }
    static success(message: string) {
        console.log(`[SUCCESS] ${message}`);
    }
}