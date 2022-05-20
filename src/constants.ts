export const Constants: {
  GAME_SIZE: {
    width: number,
    height: number
  },
  PLAYER_SIZE: number,
  PLAYER_DEFAULT_HEALTH: number,

  GAME_UTILIZE_PRERENDER: boolean,
  GAME_FLIP_SIGHTS: boolean

  GAME_INCREASE_ZOMBALL_INTERVAL: number,
  GAME_INCREASE_ZOMBALL_NUMBER: number,

  // zomball_blood_splater_size
  ZOMBALL_BLOOD_SPLATTER_SIZE: number,
  ZOMBALL_BLOOD_SPLATTER_CIRCLES: number,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN: number,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX: number,

  ZOMBALL_BASE_VALUE: number,
  ZOMBALL_SCORE_FACTOR: number,
  ZOMBALL_SPAWN_OFFSET: number,
  ZOMBALL_MAX_COUNT: number,
  ZOMBALL_ALERT_RANGE: number,
  ZOMBALL_WALKING_CHANGE_OFFSET: number,
  ZOMBALL_CHANGE_DIRECTION_POSSIBILITY: number,
  ZOMBALL_ALERT_CHARGE_POSSIBILITY: number,
  ZOMBALL_CHARGE_SPEED: number,
  ZOMBALL_SPEED_MIN: number,
  ZOMBALL_SPEED_RANGE: number,
  ZOMBALL_SIZE: number,
  ZOMBALL_DEATH_TIME: number,
  ZOMBALL_CHARGE_POSSIBILITY: number,
  ZOMBALL_EATING_GRASS_POSSIBILITY: number,
  ZOMBALL_DEST_REACH_MOVE_POSSIBILITY: number,
  ZOMBALL_SPAWN_NEW_ZOMBALL_DELAY: number, //0.02;
  ZOMBALL_SPAWN_RESTRAINED: boolean, // = true;
  ZOMBALL_DEFAULT_HEALTH: number, // = 50.0;
  ZOMBALL_DAMAGE_VALUE: number, // = 5.0;

  WEAPON_PISTOL_MAX_AMMO: number,
  WEAPON_PISTOL_PROJECTILE_SIZE: number,
  WEAPON_PISTOL_PROJECTILE_DAMAGE: number,
  WEAPON_PISTOL_PROJECTILE_SPEED: number,

  WEAPON_RIFLE_MAX_AMMO: number,
  WEAPON_RIFLE_PROJECTILE_SIZE: number,
  WEAPON_RIFLE_PROJECTILE_DAMAGE: number,
  WEAPON_RIFLE_PROJECTILE_SPEED: number,
} = {
  // Game canvas size
  GAME_SIZE: {
    width: 1024, 
    height: 768
  },

  // Player physical size
  PLAYER_SIZE: 50,

  // How many health points does the player start with
  PLAYER_DEFAULT_HEALTH: 100,

  // Unused at the moment, flag for using canvas prerender
  // for performance kick.
  GAME_UTILIZE_PRERENDER: false,

  // Should the target be flipper, PoC for mobile where 
  // a thumb/finger would get in the way of a potential target,
  // so flipping the sights to opposite the touch point helps
  GAME_FLIP_SIGHTS: false,

  // After how manu seconds to increase the max enemy entity count
  // by GAME_INCREASE_ZOMBALL_NUMBER
  GAME_INCREASE_ZOMBALL_INTERVAL: 10.0,

  // How many enemy entities to in crease the max number by after 
  // GAME_INCREASE_ZOMBALL_INTERVAL seconds
  GAME_INCREASE_ZOMBALL_NUMBER: 1.0,

  // The longer an enemy lives for they get a weighted score, this
  // is based on milliseconds and can be quite large, the time alive
  // score is reduced by deviding by the the ZOMBALL_SCORE_FACTOR number.
  ZOMBALL_SCORE_FACTOR: 50,

  // How many base points are achieved by killing an enemy
  ZOMBALL_BASE_VALUE: 50,

  // How large is the invisble box around the player where enemies wont spawn,
  ZOMBALL_SPAWN_OFFSET: 400,

  // Starting maxmum count
  ZOMBALL_MAX_COUNT: 50,

  // If an enemy is shot, other enemies within this amount of pixels
  // have a possibility of charging also.
  ZOMBALL_ALERT_RANGE: 100,

  // If an enemy is just walking around, this defines the maximum
  // deviation when it changes it's direction
  ZOMBALL_WALKING_CHANGE_OFFSET: 20,

  // How likely an enemy is to change it's direction of walking
  // larger numbers mean less likely.
  ZOMBALL_CHANGE_DIRECTION_POSSIBILITY: 10,

  // What is the possibility that an enemy that is alerted to the 
  // player will charge. Higher numbers mean less likely.
  ZOMBALL_ALERT_CHARGE_POSSIBILITY: 50,

  // Base speed that an enemy will charge. Higher is faster.
  ZOMBALL_CHARGE_SPEED: 0.08,

  // Normal enemy speed
  ZOMBALL_SPEED_MIN: 0.02,

  // Enemy speed randomiser
  ZOMBALL_SPEED_RANGE: 0.005,

  // Base size of the enemy
  ZOMBALL_SIZE: 20,

  // How long in seconds enemies bodies lie
  // in the game field as entities
  ZOMBALL_DEATH_TIME: 5,

  // if an enemy is within ZOMBALL_ALERT_RANGE of the player,
  // How likely is it that it will charge. Higher is less likely.
  // ie 1 in ZOMBALL_CHARGE_POSSIBILITY
  ZOMBALL_CHARGE_POSSIBILITY: 10,

  // Unused ATM.
  ZOMBALL_EATING_GRASS_POSSIBILITY: 20,

  // What is the possibility of moving once an enemy reaches it's destination
  ZOMBALL_DEST_REACH_MOVE_POSSIBILITY: 2,

  // How many milliseconds between spawning new enemies
  ZOMBALL_SPAWN_NEW_ZOMBALL_DELAY: 1000,

  // Whether or not to enforce ZOMBALL_SPAWN_OFFSET, useful when debugging
  ZOMBALL_SPAWN_RESTRAINED: true,

  // What is the default health each enemy has
  ZOMBALL_DEFAULT_HEALTH: 500,

  // How much healthpoints damage does each enemy do once it 'gets' the player
  ZOMBALL_DAMAGE_VALUE: 5.0,

  // The radius in pixels of the death blood splatter
  ZOMBALL_BLOOD_SPLATTER_SIZE: 20,

  // How many blood 'circles' for the splatter
  ZOMBALL_BLOOD_SPLATTER_CIRCLES: 10,

  // Minimum size of blood circles
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN: 1,

  // Maximum size of blood circles
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX: 10,

  // Pistol settings
  WEAPON_PISTOL_MAX_AMMO: 0,
  WEAPON_PISTOL_PROJECTILE_SIZE: 5,
  WEAPON_PISTOL_PROJECTILE_DAMAGE: 100,
  WEAPON_PISTOL_PROJECTILE_SPEED: 1,

  // Rifle settings
  WEAPON_RIFLE_MAX_AMMO: 24,
  WEAPON_RIFLE_PROJECTILE_SIZE: 3,
  WEAPON_RIFLE_PROJECTILE_DAMAGE: 500,
  WEAPON_RIFLE_PROJECTILE_SPEED: 2
}
