local sort = {}

sort.steps = 0

function sort.selection(array)

    print("\nSelection Sort")

    local function deepClone(obj)
        if type(obj) ~= "table" then
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

    while (j > 1) do
        local biggestNumber = newArray[1]
        local biggestNumberLocation = 1
        for i = 2, j, 1 do
            sort.steps = sort.steps + 1
            if (newArray[i] > biggestNumber) then
                biggestNumber = newArray[i]
                biggestNumberLocation = i
            end
        end
        if (biggestNumberLocation ~= j) then
            local temp = newArray[j]
            newArray[j] = biggestNumber
            newArray[biggestNumberLocation] = temp
        end
        j = j - 1
    end
    return newArray
end

return sort