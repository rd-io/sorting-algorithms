local sort = {}

sort.steps = 0
function sort.bubble(array)

    local function deepClone(obj)
        if type(obj) ~= 'table' then
            return obj
        end
        local res = {}
        for k, v in pairs(obj) do
            res[deepClone(k)] = deepClone(v)
        end
        return res
    end

    local newArray = deepClone(array)
    local j = #newArray

    while j > 0 do
        for i = 2, j do
            sort.steps = sort.steps + 1
            if(newArray[i-1] > newArray[i]) then
                local temp = newArray[i]
                newArray[i] = newArray[i-1]
                newArray[i-1] = temp
            end
        end
        j = j - 1
    end
    return newArray
end

return sort
