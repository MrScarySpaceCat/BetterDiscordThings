/**
 * @name DiscordExperimentsV2
 * @description Remake of the discordExperiments. Please make sure to exit out of settings everytime you turn this plugin on or off for it to have an effect.
 * @author MrScarySpaceCat
 * @version 1.0.0
 * @authorLink https://github.com/MrScarySpaceCat
 * @invite https://discord.gg/uefta
 * @website https://github.com/MrScarySpaceCat/BetterDiscordThings
 * @source https://github.com/MrScarySpaceCat/BetterDiscordThings/blob/master/plugins/DiscordExperimentsV2.plugin.js
 */


function setExperiments(value) {
    webpackChunkdiscord_app.push([["wp_isdev_patch"], {}, r => cache=Object.values(r.c)]);
    var UserStore = cache.find(m => m?.exports?.default?.getCurrentUser).exports.default;
    var actions = Object.values(UserStore._dispatcher._actionHandlers._dependencyGraph.nodes);
    var user = UserStore.getCurrentUser();
    actions.find(n => n.name === "ExperimentStore").actionHandler.CONNECTION_OPEN({
        type: "CONNECTION_OPEN", user: {flags: user.flags |= value}, experiments: [],
    });
    actions.find(n => n.name === "DeveloperExperimentStore").actionHandler.CONNECTION_OPEN();
    webpackChunkdiscord_app.pop(); user.flags &= ~value; "done";
}

module.exports = class DiscordExperiments {
	start() {
        setExperiments(1)
	}

	stop() {
        setExperiments(0)
	}
}