const core = require('../.')

function perfrormScript(script) {

}

function performPhase(phase) {

}

function performAction(action) {
return core.getAdapter(action.adapterScope)
}