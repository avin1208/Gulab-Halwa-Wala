import teamblock from '../data/author.json';
// team details
function getTeam(id) {
    return teamblock.filter(team => { return team.id === parseInt(id) })[0];
}
export { getTeam };