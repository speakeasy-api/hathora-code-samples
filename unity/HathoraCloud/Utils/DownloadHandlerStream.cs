
//------------------------------------------------------------------------------
// <auto-generated>
// This code was generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
//
// Changes to this file may cause incorrect behavior and will be lost when
// the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
#nullable enable
namespace HathoraCloud.Utils
{
    using System.IO;
    using UnityEngine.Networking;
    using UnityEngine;

    internal class DownloadHandlerStream : DownloadHandlerScript
    {
        private MemoryQueueBufferStream stream;

        public MemoryQueueBufferStream Stream
        {
            get { return stream; }
        }

        public bool Complete { get; private set; } = false;

        public DownloadHandlerStream()
            : base(new byte[64 * 1024])
        {
            stream = new MemoryQueueBufferStream();
        }

        protected override byte[] GetData()
        {
            using (MemoryStream ms = new MemoryStream())
            {
                var replacementBuffer = new MemoryQueueBufferStream();

                byte[] buffer = new byte[2048];
                int bytesRead = 0;
                while((bytesRead = Stream.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, bytesRead);
                    replacementBuffer.Write(buffer, 0, bytesRead);
                }

                stream = replacementBuffer;

                return ms.ToArray();                
            }
        }

        protected override string GetText()
        {
            return System.Text.Encoding.UTF8.GetString(GetData());
        }

        protected override bool ReceiveData(byte[] data, int dataLength)
        {
            stream.Write(data, 0, dataLength);
            return true;
        }

        protected override void CompleteContent()
        {
            stream.Complete = true;
            Complete = true;
        }

        protected override void ReceiveContentLengthHeader(ulong contentLength) { }
    }
}