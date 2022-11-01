/**
 * Truck Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-25
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  private licensePlate: string

  constructor(
    licensePlate: string,
    colour: string,
    maxSpeed: number,
    numTires: number
  ) {
    super(colour, maxSpeed, numTires)
    this.licensePlate = licensePlate
  }

  // getters and setters
  status(): void {
    console.log(
      `        --> Speed: ${super.getSpeed()}
        --> MaxSpeed: ${super.getMaxSpeed()}
        --> License Plate: ${this.licensePlate}
        --> Color: ${super.getColor()}
        --> Number of tires: ${super.getTires()}`
    )
  }

  getLicensePlate(): string {
    return this.licensePlate
  }

  setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  // provideAir method - break but with air pressure.
  provideAir(airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck