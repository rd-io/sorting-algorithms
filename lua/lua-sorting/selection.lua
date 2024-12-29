local deepClone = require "functions/deepClone"

local sort = {}

sort.checks = 0
sort.swaps = 0

function sort.selection(array)
    print("\nSelection Sort")

    local newArray = deepClone(array)
    local j = #newArray

    while (j > 1) do
        local biggestNumber = newArray[1]
        local biggestNumberLocation = 1
        for i = 2, j, 1 do
            sort.checks = sort.checks + 1
            if (newArray[i] > biggestNumber) then
                biggestNumber = newArray[i]
                biggestNumberLocation = i
            end
        end
        if (biggestNumberLocation ~= j) then
            local temp = newArray[j]
            newArray[j] = biggestNumber
            newArray[biggestNumberLocation] = temp
            sort.swaps = sort.swaps + 1
        end
        j = j - 1
    end
    return newArray
end

return sort
