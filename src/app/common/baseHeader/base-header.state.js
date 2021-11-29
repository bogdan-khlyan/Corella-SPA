import {reactive} from 'vue'

export const baseHeaderState = reactive({
    searchValue: ''
})

export function setHeaderSearchValue(value) {
    console.log(value)
    baseHeaderState.searchValue = value
}