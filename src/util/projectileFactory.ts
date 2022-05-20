import Bullet from "../obj/bullet";
import Projectile from "../obj/projectile";

export default function projectileFactory(type: string): Projectile {
  switch (type) {
    case 'bullet':
      return new Bullet();
      break;
    default:
      return new Bullet();
      break;
  }
}