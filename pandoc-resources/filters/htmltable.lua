function RawBlock(raw)
  if raw.format:match 'html' and raw.text:match '%<table' then
    return pandoc.read(raw.text, raw.format).blocks
  end
end