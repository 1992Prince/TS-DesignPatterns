class Logger {

    private static instance: Logger;

    private Logger(){}
    
    public static getInstance():Logger {
        if(!Logger.instance){
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    public log(message: string):void {
        const timestamp = new Date();
        console.log(`[${timestamp.toLocaleString()}] - ${message}`)
    }
}


// now in you framework in one class u created instance of logger and logged message to filesystem
let logger1 = Logger.getInstance();
logger1.log("This is first message");

// now again in other class of framework u need to log the messages and again u called getInstance()
// this time Logger class instance already created in some other classes so same object 
// reference will be returned here instead of creating new object
let logger2 = Logger.getInstance();
logger2.log("This is second message");

