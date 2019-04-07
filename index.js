// Code your solution in this file
function findMatching(drivers, name)
{
  const newDrivers = [];
  for (const driver of drivers)
  {
    if (driver.toLowerCase() === name.toLowerCase())
    {
      newDrivers.push(driver)
    }
  }
  return newDrivers;
}
function fuzzyMatch()
{

}
function matchName()
{

}
