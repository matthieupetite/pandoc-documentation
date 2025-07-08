-- local logging = require 'logging'

levels = {
  1,1,1,1,1,1,1,1,1
}

local previouslevel = 1
local firstpath = true

function getLevel(level)
  local result = ""
  if level < previouslevel then
    levels[level] = levels[level] + 1
  end

  if previouslevel >= level  then
    for j = level+1, #levels do
      levels[j] = 1
    end
  end

  if level == previouslevel and firstpath == false then
    levels[level] = levels[level] + 1
  end
  firstpath = false
  for i=1,level do
    result = result .. levels[i] .. "."
  end
  previouslevel = level
  return result
end

function Header(el)
    local levelTitle = getLevel(el.level) 
    if el.level > 5 then
      return {
        pandoc.RawInline('latex','\\par\\vspace{0.5em}'),
        pandoc.RawInline('latex','\\textcolor{primarycolor}{\\textbf{' .. levelTitle .. ' ' .. pandoc.utils.stringify(el) .. '}}'),
        pandoc.RawInline('latex','\\par\\vspace{0.5em}'),
      }
    end
    if el.level == 5 then
      return {
        pandoc.RawInline('latex','\\par\\vspace{0.5em}'),
        pandoc.RawInline('latex','\\textcolor{primarycolor}{\\textbf{' .. levelTitle .. ' ' .. pandoc.utils.stringify(el) .. '}}'),
        pandoc.RawInline('latex','\\par\\vspace{0.5em}'),
      }
    end

end

