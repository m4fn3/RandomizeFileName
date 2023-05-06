import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React, Linking} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {bulk, filters} from "enmity/metro"
import {get} from "enmity/api/settings";

const Patcher = create('RandomizeFileName')

const [
    FileManager,
] = bulk(
    filters.byProps("addFile"),
)

const RandomizeFileName: Plugin = {
    ...manifest,
    onStart() {
        function randomizeName(filename) {
            let splitted = filename.split(".")
            let ext = ""
            let exclude = false
            if (splitted.length > 1) {
                ext = `.${splitted[splitted.length - 1]}`
                if (get(plugin_name, "exts", "[]").toString().split("|").includes(ext.slice(1))) {
                    exclude = true
                }
            }
            let randomName = Math.random().toString(32).substring(2)
            return exclude ? filename : `${randomName}${ext}`
        }

        Patcher.after(FileManager, "addFile", (_, args, org) => {
            args[0].file.filename = randomizeName(args[0].file.filename)
        })
        Patcher.after(FileManager, "addFiles", (_, args, org) => {
            args[0].files.forEach((file, idx) => {
                args[0].files[idx].filename = randomizeName(args[0].files[idx].filename)
            })
        })

    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(RandomizeFileName)
