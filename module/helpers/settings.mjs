export class SettingsHelpers {

  static initSettings(){

    game.settings.register("ffxiv", "toggleExperience", {
      name: game.i18n.localize("FFXIV.Settings.ToggleExperience"),
      hint: game.i18n.localize("FFXIV.Settings.ToggleExperienceHint"),
      scope: "world",
      config: true,
      default: true,
      type: Boolean,
      requiresReload: false
    });

    game.settings.register("ffxiv", "limitedPhysicalItemsDialog", {
      name: game.i18n.localize("FFXIV.Settings.LimitedPhysicalItemsDialog"),
      hint: game.i18n.localize("FFXIV.Settings.LimitedPhysicalItemsDialogHint"),
      scope: "client",
      config: true,
      default: true,
      type: Boolean,
      requiresReload: false
    });

    game.settings.register("ffxiv", "theme", {
      name: game.i18n.localize("FFXIV.Settings.Theme"),
      hint: game.i18n.localize("FFXIV.Settings.ThemeHint"),
      scope: "client",
      config: true,
      default: "dark",
      type: String,
      choices: {
            "dark": "Dark",
            "light": "Light"
      },
      requiresReload: true
    });

    game.settings.register("ffxiv", "soundNotificationNewPlayer", {
      name: game.i18n.localize("FFXIV.Settings.SoundNotificationNewPlayer"),
      hint: game.i18n.localize("FFXIV.Settings.SoundNotificationNewPlayerHint"),
      scope: "client",
      config: true,
      default: true,
      type: Boolean,
      requiresReload: false
    });

  }

}
