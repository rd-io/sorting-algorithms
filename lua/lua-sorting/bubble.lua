local deepClone = require "functions/deepClone"

local sort = {}

sort.checks = 0
sort.swaps = 0

function sort.bubble(array)
    print("\nBubble Sort")

    local newArray = deepClone(array)
    local j = #newArray

    while j > 0 do
        for i = 2, j do
            sort.checks = sort.checks + 1
            if(newArray[i-1] > newArray[i]) then
                local temp = newArray[i]
                newArray[i] = newArray[i-1]
                newArray[i-1] = temp
                sort.swaps = sort.swaps + 1
            end
        end
        j = j - 1
    end
    return newArray
end

return sort
