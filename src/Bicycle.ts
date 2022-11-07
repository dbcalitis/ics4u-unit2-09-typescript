/**
 * Bicycle Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-25
 */

import Vehicle from './Vehicle'

class Bicycle extends Vehicle {
  // Cadence field
  private cadence = 0

  // getter and setter
  status(): void {
    super.status()
    console.log(`        --> Cadence: ${this.cadence}`)
  }

  getCadence(): number {
    return this.cadence
  }

  // accelerate() method - increases the cadence
  accelerate(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // ringBell() method - prints a bell sound
  ringBell(): void {
    console.log('Ding ding!\n')
  }
}

export = Bicycle
