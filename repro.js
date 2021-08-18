const fs = require("fs");

let yarnrc = fs.readFileSync(".yarnrc.yml").toString();

const args = process.argv.slice(2);

if (args[0] === "error") {
  yarnrc = yarnrc.replace(
    /^nmHoistingLimits: workspaces$/m,
    "# nmHoistingLimits: workspaces"
  );
  console.log("Error state");
} else {
  yarnrc = yarnrc.replace(
    /^# nmHoistingLimits: workspaces$/m,
    "nmHoistingLimits: workspaces"
  );

  console.log("Success state");
}

fs.writeFileSync(".yarnrc.yml", yarnrc);
