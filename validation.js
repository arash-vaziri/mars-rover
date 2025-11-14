module.exports.validateZone = (zone) => {
    const zonePattern = /^\d+\s+\d+$/;
    return zonePattern.test(zone.trim());
}

module.exports.validateLanding = (land) => {
    const landPattern = /^\d+\s+\d+\s+[NSEW]$/;
    return landPattern.test(land.trim());
}

module.exports.validateInstruction = (instruction) => {
    
    const instructionPattern = /^[LRM]+$/;
    return instructionPattern.test(instruction.trim());
}

