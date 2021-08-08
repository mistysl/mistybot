exports.run = (client, message, args) => {
code here
}
module.exports.config = {
    name: "Status",
    aliases: ["sta"]
    run = async (message) => {
    axios.get("https://api.scpslgame.com/serverinfo.php?id=19141&key=dH1r57yf50Ne4oTsFfAzmITd&lo=false&players=true&list=false&info=false&pastebin=false&version=false&flags=false&nicknames=false&online=true")
        .then((res) => {
            console.log('RES:', res)
        })
        .catch((err) => {
            console.error('ERR', err)
        })
    }
};