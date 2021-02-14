class Ping{
    constructor(message){
        this.message = message;
        this.action();
    }

    action(){
        const timeTaken = Date.now() - this.message.createdTimestamp;
        this.message.delete();
        this.message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
}
module.exports = Ping;