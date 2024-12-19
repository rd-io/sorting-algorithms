local deepClone = require "functions/deepClone"

local sort = {}

sort.checks = 0
sort.swaps = 0

function sort.insertion(array)
    print("\nInsertion Sort")

    local newArray = deepClone(array)

    for i = 2, #newArray, 1 do
        for j = i, 2, -1 do
            sort.checks = sort.checks + 1
            if(newArray[j-1] > newArray[j]) then
                newArray[j-1] = newArray[j-1] + newArray[j]
                newArray[j] = newArray[j-1] - newArray[j]
                newArray[j-1] = newArray[j-1] - newArray[j]
                sort.swaps = sort.swaps + 1
            else
                break
            end
        end
    end
    return newArray
end

return sort
