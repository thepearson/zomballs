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
} = {
  GAME_SIZE: {
    width: 800, 
    height: 600
  },
  PLAYER_SIZE: 50,
  PLAYER_DEFAULT_HEALTH: 100,

  GAME_UTILIZE_PRERENDER: true,
  GAME_FLIP_SIGHTS: false,
  GAME_STATS_UPDATE_INTERVAL: 1.0,
  GAME_SCORE_UPDATE_INTERVAL: 0.5,
  GAME_INCREASE_ZOMBALL_INTERVAL: 10.0,
  GAME_INCREASE_ZOMBALL_NUMBER: 1.0,

  BULLET_DAMAGE_VALUE: 100.0,

  ZOMBALL_BLOOD_SPLATTER_SIZE: 25,
  ZOMBALL_BLOOD_SPLATTER_CIRCLES: 20,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN: 1,
  ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX: 10
}


// num LOG_DEBUG = 3;
// num LOG_INFO = 2;
// num LOG_ERROR = 1;

// var zomball_spawn_offset = 250;
// var zomball_max_count = 50;
// var zomball_alert_range = 100;
// var zomball_walking_change_offset = 400;
// var zomball_change_direction_possibility = 10;
// var zomball_alert_charge_possibility = 50;
// var zomball_charge_speed = 20;
// var zomball_speed_min = 30;
// var zomball_speed_range = 5;
// var zomball_size = 20;
// var zomball_death_time = 5;
// var zomball_charge_possibility = 10;
// var zomball_eating_grass_possibility = 20;
// var zomball_dest_reach_move_possibility = 5;
// var zomball_spawn_new_zomball_delay = 0.02;
// var zomball_spawn_restrained = true;
// var zomball_default_health = 50.0;
// var zomball_damage_value = 5.0;

// var zomball_blood_splater_circles = 20;
// var zomball_blood_splater_cicrle_min = 1;
// var zomball_blood_splater_cicrle_max = 10;

// num debug_level = 0;