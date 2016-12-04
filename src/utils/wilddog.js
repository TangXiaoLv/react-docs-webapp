import Wilddog from "wilddog/lib/wilddog-web-all";
//wilddog：https://www.wilddog.com/
//init
const appId = 'toon-rn';
const config = {
    syncDomain: `${appId}.wilddogio.com`,
    syncURL: `https://${appId}.wilddogio.com`
};
//setup root node
Wilddog.initializeApp(config);
const testRef = Wilddog.sync().ref('test');

export function getRef(ref) {
    return testRef.child(ref);
}

