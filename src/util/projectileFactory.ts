import Bullet from "../obj/bullet";
import Projectile from "../obj/projectile";

/**
 * "factory" method for returning projectile objects JIT.
 * There's nicer more perfomant ways to do this in typescript,
 * but this is fine for this use-case.
 *
 * @param   {string}      type  What type of projectile to return
 *
 * @return  {Projectile}        Concrete Projectile
 */
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