export const Constants: {
  GAME_SIZE: {
    width: number,
    height: number
  },
  PLAYER_SIZE: number,
  PLAYER_DEFAULT_HEALTH: number,

  GAME_UTILIZE_PRERENDER: boolean,
  GAME_FLIP_SIGHTS: boolean
  GAME_STATS_UPDATE_INTERVAL: number,
  GAME_SCORE_UPDATE_INTERVAL: number,
  GAME_INCREASE_ZOMBALL_INTERVAL: number,
  GAME_INCREASE_ZOMBALL_NUMBER: number,

  BULLET_DAMAGE_VALUE: number,

  // zomball_blood_splater_size
  ZOMBALL_BLOOD_SPLATTER_SIZE: number,
  ZOMBALL_BLOOD_SPLATTER_CIRCLES: number,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN: number,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX: number,

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
} = {
  GAME_SIZE: {
    width: 1024, 
    height: 768
  },
  PLAYER_SIZE: 50,
  PLAYER_DEFAULT_HEALTH: 100,

  GAME_UTILIZE_PRERENDER: false,
  GAME_FLIP_SIGHTS: false,
  GAME_STATS_UPDATE_INTERVAL: 1.0,
  GAME_SCORE_UPDATE_INTERVAL: 0.5,
  GAME_INCREASE_ZOMBALL_INTERVAL: 10.0,
  GAME_INCREASE_ZOMBALL_NUMBER: 1.0,

  BULLET_DAMAGE_VALUE: 100.0,

  ZOMBALL_SPAWN_OFFSET: 100,
  ZOMBALL_MAX_COUNT: 50,
  ZOMBALL_ALERT_RANGE: 100,
  ZOMBALL_WALKING_CHANGE_OFFSET: 400,
  ZOMBALL_CHANGE_DIRECTION_POSSIBILITY: 10,
  ZOMBALL_ALERT_CHARGE_POSSIBILITY: 50,
  ZOMBALL_CHARGE_SPEED: 20,
  ZOMBALL_SPEED_MIN: 30,
  ZOMBALL_SPEED_RANGE: 5,
  ZOMBALL_SIZE: 20,
  ZOMBALL_DEATH_TIME: 5,
  ZOMBALL_CHARGE_POSSIBILITY: 10,
  ZOMBALL_EATING_GRASS_POSSIBILITY: 20,
  ZOMBALL_DEST_REACH_MOVE_POSSIBILITY: 5,
  ZOMBALL_SPAWN_NEW_ZOMBALL_DELAY: 0.02,
  ZOMBALL_SPAWN_RESTRAINED: true,
  ZOMBALL_DEFAULT_HEALTH: 200,
  ZOMBALL_DAMAGE_VALUE: 5.0,


  ZOMBALL_BLOOD_SPLATTER_SIZE: 25,
  ZOMBALL_BLOOD_SPLATTER_CIRCLES: 20,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN: 1,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX: 10
}


// num LOG_DEBUG = 3;
// num LOG_INFO = 2;
// num LOG_ERROR = 1;

// num debug_level = 0;